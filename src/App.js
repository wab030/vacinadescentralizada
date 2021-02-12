import { useEffect, useState } from 'react';
import firebase from 'firebase';
import Form from '../src/components/form/form';
import Footer from '../src/components/footer/footer';
import Image from '../src/components/image/image';
import Title from '../src/components/title/title';
import Supporters from '../src/components/supporters/supporters';
import PrivacyPolicy from '../src/components/privacypolicy/privacypolicy';
import Share from '../src/components/share/share';
import Video from './components/video/video';
import { db } from './firebase';
import './App.css';
import { formatName, formatEmail} from './utils/commonfunctions';
import video1 from './assets/videos/videoaglomeracaovacina.mp4'
import video2 from './assets/videos/ceciliopedevacinacaodescentralizada.mp4'


function App() {
  const [supporters, setSupporters] = useState([]);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    neighborhood: '',
    comment: '',
    publicSign: true
  });
  const [supporterSigned, setSupporterSigned] = useState(false);
  let collectionName = 'supporters';

  useEffect(() => {
    let supportersAux = [];
    db.collection(collectionName)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          supportersAux.push({ ...doc.data() });
        });
        setSupporters(supportersAux);
      })
  }, [collectionName]);

  const handleChanges = (event) => {
    const fieldName = event.target.getAttribute('id');
    let newFormValues;
    if (event.target.type === "checkbox") {
      let publicSign = (event.target.value === 'true');
      // console.log("Status:", status);
      // console.log("!Status:", !status);
      // console.log("[Entrei no if do check] value = ", event.target.value);
      newFormValues = {
        ...formValues,
        [fieldName]: !publicSign
      };
      console.log("New Form Values", newFormValues)
    } else {
      newFormValues = {
        ...formValues,
        [fieldName]: event.target.value
      };
    }
    setErrors(validate(newFormValues));
    setFormValues(newFormValues);
  }

  const handleBlur = (event) => {
    const fieldName = event.target.getAttribute('id');
    const newTouched = {
      ...touched,
      [fieldName]: true
    }
    setTouchedFields(newTouched);
  }

  const validate = (values) => {
    const errors = {};
    const parse_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!parse_email.test(values.email)) {
      errors.email = "Por favor, insira um e-mail válido!";
    }
    if (values.name.length < 3) {
      errors.name = "Nome é obrigatório.";
    }
    if (values.surname.length < 3) {
      errors.surname = "Sobrenome é obrigatório.";
    }
    // let parse_phone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/;
    // if (values.phone && !parse_phone.test(values.phone)) {
    //   errors.phone = "Por favor, insira um telefone válido.";
    // }

    return errors;
  }

  const storeSupporter = (event) => {
    event.preventDefault();
    let name = formatName(event.target.name.value);
    let surname = formatName(event.target.surname.value);
    let email = formatEmail(event.target.email.value);
    let phone = event.target.phone.value;
    let neighborhood = formatName(event.target.neighborhood.value);
    let comment = event.target.comment.value;
    let publicSign = event.target.publicSign.value;
    setFormValues({
      name: '',
      surname: '',
      email: '',
      phone: '',
      neighborhood: '',
      comment: '',
      publicSign: true
    });

    name = name.substring(0, 50);
    email = email.substring(0, 30);
    comment = comment.substring(0, 300);
    if (name && email) {
      let docRef = db.collection(collectionName).doc(email);
      docRef.get()
        .then(function (doc) {
          if (doc.exists) {
            let newErrors = {
              ...errors,
              general: "Usuário já assinou o abaixo assinado."
            }
            setErrors(newErrors);
          } else {
            const newSupporter = {
              name: name,
              surname: surname,
              email: email,
              phone: phone,
              neighborhood: neighborhood,
              comment: comment,
              publicSign: publicSign === 'true' ? true : false,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
            db.collection(collectionName).doc(email).set(newSupporter)
              .then(function (docRef) {
                alert("Obrigado por assinar !!!");
                setSupporterSigned(true);
                let newSupporters = [
                  ...supporters,
                  newSupporter
                ]
                setSupporters(newSupporters);
                setFormValues({
                  name: '',
                  surname: '',
                  email: '',
                  neighborhood: '',
                  comment: ''
                });
              }).catch(function (error) {
                console.error("Erro ao incluir o usuário: ", error);
                let newErrors = {
                  ...errors,
                  general: "Erro ao incluir o usuário na base de dados."
                }
                setErrors(newErrors);
              });
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
    } else {
      console.log("Os campos nome e e-mail são obrigatórios para prosseguir.");
      alert("Por favor preencha os dois campos antes de clicar no botão enviar.");
    }
  }

  return (
    <div className="App">
      {/* <HelmetMetaData image={'https://ceciliopt.com.br/seringa.png'}/> */}
      <div className="container-fluid principal">
        {/* <div className='row'>
          <Image />
        </div> */}
        <div className="title">
          Denúncia !!! Centro de Vacinação Lotado em Campinas<br />
          Precisamos de mais postos de vacinação já!
        </div>
        <div className='row'>
          <Video video={video1} videoTitle='11-Fev-2021 - Centro de Vacinação Lotado'/>
        </div>
        <div className="row bloco1">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Title />
            <p className="text-justify">
              Queremos que o prefeito de Campinas Dario Saadi leve a campanha de vacinação contra a Covid-19 a todos os Centros de Saúde da cidade. Não concordamos que os idosos e seus acompanhantes tenham que se deslocar quilômetros de suas casas até um dos cinco pontos de vacinação definidos pela Prefeitura. <strong>Assine já.</strong>
            </p>
            <hr />
            <p className='text-justify'>
              Não podemos nos calar diante da estratégia de vacinação para imunizar contra a COVID-19 adotada pela Prefeitura de Campinas. Queremos que as doses estejam disponíveis nos <strong>CENTROS DE SAÚDE</strong>, espalhados estrategicamente nos quatro cantos da cidade. E a aplicação deve ser ministrada pelas equipes de saúde que já realizaram diversas campanhas e que portanto têm muita experiência, conhecem seus pacientes, suas histórias e suas vidas.
              </p>
            <p className='text-justify'>
              A proposta de centralizar o atendimento às pessoas idosas e com comorbidades em apenas cinco locais vai aumentar sua exposição ao vírus e também de seus acompanhantes e cuidadores. A situação se agrava em relação àqueles que usam o transporte público, já sobrecarregado e com condições higiênicas muito abaixo das necessidades de proteção do público em geral. Lembrando que os trabalhadores, motoristas dos ônibus, dos transportes de acamados, condutores de táxi e dos outros meios de transporte. passarão pelo mesmo risco.
              </p>
            <p className='text-justify'>
              Questões como segurança das unidades e o armazenamento adequado dessa preciosa vacina poderão ser resolvidas com ações articuladas entre as equipes de saúde com a Guarda Municipal, a Polícia Militar e até o Exército Brasileiro.
            </p>
            <p className='text-justify'>
              Vamos fazer com que a vacina chegue a todas as <strong>regiões de Campinas</strong>.
            </p>
            <h4 className='text-center'>
              VIDAS IMPORTAM, INDEPENDENTE DA IDADE E DA CONDIÇÃO DE SAÚDE.
            </h4>
          </div>
          <div className="col-md-4" >
            {supporterSigned
              ?
              <Share />
              :
              <div>
                <Form
                  supportersCount={supporters.length}
                  handleSubmit={storeSupporter}
                  handleChanges={handleChanges}
                  handleBlur={handleBlur}
                  formValues={formValues}
                  formErrors={errors}
                  formTouched={touched}
                />
                <PrivacyPolicy />
              </div>
            }
            <Supporters supporters={supporters} />
          </div>
        </div>
        <br />
        <div className='row'>
          <Video video={video2} videoTitle='Cecílio pede a descentralização da vacinação.'/>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
