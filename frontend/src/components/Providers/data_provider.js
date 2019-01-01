import React, { Component } from "react";
import { DataContext } from "../Contexts/";
import { errors, formatName } from "../../utils";
import { DLF_Green } from "../Styled/";

const {Provider, Consumer } = DataContext

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_style: "DLF_Pickseed_Pro_Turf",
      display_form: true,
      display_modal: false,
      count: 0,
      isAlist: false,
      variety_name: "",
      species_name: "",
      sliders: {},
      tables: {},
      image: "",
      quick_facts: "",
      adaptation: "",
      seeding_rate: "",
      establishment_rate: "",
      mowing_frequency: "",
      nitrogen_required: "",
      endophyte_enhanced: "",
      toleranceSelected: false,
      error_message: null,

      chooseTheme: e => {
        var target = e.target;
        const { name } = target.dataset;
        this.setState({ theme_style: name });
      },

      displayForm: () => {
        this.setState(prevState => {
          var newState = Object.assign(prevState);
          if (this.state.theme_style)
            newState["display_form"] = !prevState["display_form"];
          else newState.error_message = errors.style_not_selected;
          return newState;
        });
      },

      displayModal: e => {
        this.setState({ display_modal: true });
      },

      closeModal: e => {
        e.preventDefault();
        const button = e.target;
        const { src } = e.target.dataset;
        if (e.target.dataset.overlay) {
          this.setState({ display_modal: false });
        }
        if (src) {
          button.style.background = DLF_Green;
          setTimeout(
            () => this.setState({ image: src, display_modal: false }),
            1200
          );
        }
      },

      handleCheck: () => {
        this.setState(prevState => {
          var newState = Object.assign(prevState);
          var checked = newState.isAlist;
          return {
            isAlist: !checked
          };
        });
      },

      handleSubmit: (tolerances, e) => {
        var count = 0;
        var inputs = [];
        for (let tolerance in tolerances) {
          if (tolerances[tolerance] === true) {
            inputs.push(tolerance);
            count++;
          }
        }

        if (count >= 4) {
          this.setState({
            sliders: inputs,
            toleranceSelected: true,
            error_message: null
          });
        } else {
          this.setState({
            error_message: errors.tolerance_not_selected
          });
        }
      },

      handleChange: e => {
        var { name, value } = e.target;
        console.log(name, value);
        if (value === "--Select") return;
        if (value) {
          this.setState(prevState => {
            var newState = Object.assign(prevState);
            newState[name] = formatName(value, "name");
            return newState;
          });
        } else {
          this.setState(prevState => {
            var newState = Object.assign(prevState);
            newState[name] = "";
            return newState;
          });
        }
      },

      saveForm: () => {
        this.setState(prevState => {
          var newState = Object.assign(prevState);
          var structured = {
            header: {
              a_list: this.state.isAlist,
              variety_name: this.state.variety_name,
              species_name: this.state.species_name
            },
            tolerance_table: {
              info: this.state.sliders.map(v => [v, this.state[v]])
            },
            image: this.state.image,
            content: {
              quick_facts: this.state.quick_facts,
              adaptation: this.state.adaptation
            },
            ntep_data: {
              info: this.state.tables
            },
            bottom_info: {
              seeding_rate: this.state.seeding_rate,
              establishment_rate: this.state.establishment_rate,
              mowing_frequency: this.state.mowing_frequency,
              nitrogen_required: this.state.nitrogen_required,
              endophyte_enhanced: this.state.endophyte_enhanced
            }
          };
          newState["form_data"] = structured;
          return newState;
        });
        console.log(this.state.form_data);
      },

      reset: e => {
        e.preventDefault();
        this.setState({
          count: 0,
          isAlist: false,
          variety_name: "",
          species_name: "",
          sliders: {},
          tables: {},
          image: "",
          quick_facts: "",
          adaptation: "",
          seeding_rate: "",
          establishment_rate: "",
          mowing_frequency: "",
          nitrogen_required: "",
          endophyte_enhanced: "",
          toleranceSelected: false,
          error_message: null
        });
      },

      addTable: table => {
        if (table.confirmed) return;
        var { id, title, lines } = table;
        var LSDFilled = table.lines.lsd.ntep_rating.filled;
        var titleFilled = title !== "";
        var oneOfOursSelected = false;
        var count = 0;
        for (let row in lines) {
          if (row !== "lsd") {
            if (
              lines[row].ntep_rating.filled &&
              lines[row].variety_name.filled
            ) {
              count++;
            }
            if (lines[row].proprietary) {
              oneOfOursSelected = true;
            }
          }
        }

        this.setState(prevState => {
          var newState = Object.assign(prevState);

          if (
            !table.confirmed &&
            titleFilled &&
            LSDFilled & oneOfOursSelected & (count === 8)
          ) {
            newState.tables[id] = table;
            table.confirmed = true;
            return newState;
          } else {
            return;
          }
        });
      },

      removeTable: count => {
        this.setState(prevState => {
          var newState = Object.assign(prevState);
          newState.tables[`table-${count}`] = {};
          return newState;
        });
      },

      closeDataEntry: () => {
        const entryFormWrapper = document.getElementById("entry-form-wrapper");
        setTimeout(() => {
          entryFormWrapper.style.opacity = 0;
        }, 750);

        setTimeout(() => {
          this.setState({ display_form: false });
        }, 1700);
      }
    };
  }
  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export {DataProvider, Consumer as DataConsumer}