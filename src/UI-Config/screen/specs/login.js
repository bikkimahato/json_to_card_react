const flexConfigForRegistration = {
    items: [
      {
        type: "Header",
        props: {
          label: "Login",
          horizontalAlign: "center",
          verticalAlign: "center"
        }
      },
      {
        type: "Card",
        props: {
          color: "grey",
          horizontalAlign: "left"
        },
        children: {
          items: [
            {
              type: "TextField",
              props: {
                inputType: "text",
                label: "Name",
                name: "name"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "email",
                label: "Email",
                name: "email"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "number",
                label: "Mobile",
                name: "Message"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "password",
                label: "Password",
                name: "password"
              }
            },
            {
              type: "Button",
              props: {
                label: "Login"
              }
            }
          ]
        }
      }
    ]
  };
  
  export default flexConfigForRegistration;
  