import React from "react";

const hoc = () => Component => {
  class HocComponent extends React.Component {
    state = {
      dataChange: {}
    };

    handleChange = (value, key) => {
      let { dataChange } = this.state;

      this.setState({
        ...this.state,
        dataChange: { ...dataChange, [key]: value }
      });
    };

    onFlexiSubmit = e => {
      e.preventDefault();
      console.log(this.state.dataChange);
    };

    config = {
      flexConfigForHome: {
        items: [
          {
            type: "Card",
            props: {
              label: "Good work labs",
              horizontalAlign: "left"
            }
          },
          {
            type: "Header",
            props: {
              label: "Technology",
              horizontalAlign: "left"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey"
            },
            children: {
              items: [
                {
                  type: "Cards",
                  props: {
                    cards: [
                      {
                        label: "Java",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "orange"
                      },
                      {
                        label: "React",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "blue"
                      },
                      {
                        label: "Node",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "pink"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            type: "Header",
            props: {
              label: "Drop Message",
              horizontalAlign: "left"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey",
              horizontalAlign: "center",
              verticalAlign: "center"
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
                  type: "Button",
                  props: {
                    label: "Submit"
                  }
                }
              ]
            }
          }
        ]
      },
      flexConfigForRegistration: {
        items: [
          {
            type: "Header",
            props: {
              label: "Registration",
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
                  type: "RadioGroup",
                  props: {
                    label: "Gender",
                    name: "gender",
                    options: [
                      {
                        label: "Male"
                      },
                      {
                        label: "Female"
                      }
                    ]
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
                  type: "TextField",
                  props: {
                    inputType: "password",
                    label: "Confirm Password",
                    name: "confirmPassword"
                  }
                },
                {
                  type: "Button",
                  props: {
                    label: "Register"
                  }
                }
              ]
            }
          }
        ]
      }
    };
    render() {
      console.log(this.state.dataChange);
      return (
        <Component
          config={this.config}
          handleChange={this.handleChange}
          onFlexiSubmit={this.onFlexiSubmit}
          {...this.props}
        />
      );
    }
  }
  return HocComponent;
};
export default hoc;
