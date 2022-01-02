import React, {useEffect, useState} from "react"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const App = () => {

//   const [mercadopago, setMercadopago] = useState()

//   useEffect(() => {
//     const script = document.createElement('script')
//         script.src = 'https://sdk.mercadopago.com/js/v2'

//         script.addEventListener('load', () => {
//             setMercadopago(new window.MercadoPago(''))
//         })

//         document.body.appendChild(script)

//         return () => {
//           let iframe = document.body.querySelector('iframe[src*="mercadolibre"]')

//           if (iframe) {
//               document.body.removeChild(iframe)
//           }

//           document.body.removeChild(script)
//       }
//   }, [])

//   const mp = new MercadoPago('YOUR_PUBLIC_KEY');

//   // Step #3
// const cardForm = mp.cardForm({
//   amount: "100.5",
//   autoMount: true,
//   form: {
//     id: "form-checkout",
//     cardholderName: {
//       id: "form-checkout__cardholderName",
//       placeholder: "Titular de la tarjeta",
//     },
//     cardholderEmail: {
//       id: "form-checkout__cardholderEmail",
//       placeholder: "E-mail",
//     },
//     cardNumber: {
//       id: "form-checkout__cardNumber",
//       placeholder: "Número de la tarjeta",
//     },
//     cardExpirationMonth: {
//       id: "form-checkout__cardExpirationMonth",
//       placeholder: "Mes de vencimiento",
//     },
//     cardExpirationYear: {
//       id: "form-checkout__cardExpirationYear",
//       placeholder: "Año de vencimiento",
//     },
//     securityCode: {
//       id: "form-checkout__securityCode",
//       placeholder: "Código de seguridad",
//     },
//     installments: {
//       id: "form-checkout__installments",
//       placeholder: "Cuotas",
//     },
//     identificationType: {
//       id: "form-checkout__identificationType",
//       placeholder: "Tipo de documento",
//     },
//     identificationNumber: {
//       id: "form-checkout__identificationNumber",
//       placeholder: "Número de documento",
//     },
//     issuer: {
//       id: "form-checkout__issuer",
//       placeholder: "Banco emisor",
//     },
//   },
//   callbacks: {
//     onFormMounted: error => {
//       if (error) return console.warn("Form Mounted handling error: ", error);
//       console.log("Form mounted");
//     },
//     onSubmit: event => {
//       event.preventDefault();

//       const {
//         paymentMethodId: payment_method_id,
//         issuerId: issuer_id,
//         cardholderEmail: email,
//         amount,
//         token,
//         installments,
//         identificationNumber,
//         identificationType,
//       } = cardForm.getCardFormData();

//       fetch("/process_payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           token,
//           issuer_id,
//           payment_method_id,
//           transaction_amount: Number(amount),
//           installments: Number(installments),
//           description: "Descripción del producto",
//           payer: {
//             email,
//             identification: {
//               type: identificationType,
//               number: identificationNumber,
//             },
//           },
//         }),
//       });
//     },
//     onFetching: (resource) => {
//       console.log("Fetching resource: ", resource);

//       // Animate progress bar
//       const progressBar = document.querySelector(".progress-bar");
//       progressBar.removeAttribute("value");

//       return () => {
//         progressBar.setAttribute("value", "0");
//       };
//     },
//   },
// });

  const [cvc, setCvc] = useState("")
  const [expiry, setExpiry] = useState("")
  const [focus, setFocus] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")


  const handleInputFocus = (e) => {
    setFocus(e.target.name)

  }
  
  const handleInputChange = (e) => {
    //const { name, value } = e.target;
    console.log(e.target)
    //this.setState({ [name]: value });
  }

  const onChangeName = (e) =>{
    setName(e)
  }

  const onChangeNumber = (e) =>{
    setNumber(e)
  }

  const onChangeExpiry = (e) =>{
    setExpiry(e)
  }
  
  const onChangeCvc = (e) =>{
    setCvc(e)
  }

  return(
    <div id="PaymentForm">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          preview={true}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={(e) => onChangeNumber(e.target.value)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={(e) => onChangeName(e.target.value)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="expiry"
            onChange={(e) => onChangeExpiry(e.target.value)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={(e) => onChangeCvc(e.target.value)}
            onFocus={(e) => handleInputFocus(e)}
          />
          ...
        </form>
        
      </div>
  )
}

export default App;