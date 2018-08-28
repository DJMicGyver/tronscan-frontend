import React, {Component} from 'react';
import {t, tu} from "../../utils/i18n";
import {Client} from "../../services/api";
import {connect} from "react-redux";
import {loadTokens} from "../../actions/tokens";
import {TextField} from "../../utils/formHelper";
import {filter, trim, some, sumBy} from "lodash";
import {ASSET_ISSUE_COST, ONE_TRX} from "../../constants";
import {FormattedNumber, FormattedDate, injectIntl} from "react-intl";
import {Alert} from "reactstrap";
import {addDays, addHours, isAfter} from "date-fns";
import "react-datetime/css/react-datetime.css";
import DateTimePicker from "react-datetime";
import {Link} from "react-router-dom";
import {NumberField} from "../common/Fields";
import SweetAlert from "react-bootstrap-sweetalert";
import 'moment/min/locales';

function ErrorLabel(error) {
  if (error !== null) {
    return (
        <small className="text-danger"> {error} </small>
    )
  }
  return null;
}

class Confirm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkbox: false,
      ...this.props.state
    };
  }

  hideModal = () => {
    this.setState({
      modal: null,
    });
  };
  submit = () => {
    let newErrors = {
      confirm: null,
    };
    let {checkbox} = this.state;
    if (checkbox)
      this.props.submit();
    else {
      newErrors.confirm = "需要勾选确认！";
      this.setState({errors: newErrors});
    }
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }


  render() {
    let {numberOfCoins, numberOfTron, name, abbr, description, submitMessage, frozenSupply, url, confirmed, loading, issuedAsset, totalSupply, startTime, endTime, showFrozenSupply, checkbox} = this.state;
    let {nextStep} = this.props;
    let {errors} = this.state;
    let exchangeRate = numberOfTron / numberOfCoins;

    return (

        <main className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {tu("issue_a_token")}
                  </h4>
                  <p>
                    {tu('token_issue_guide_message_1')}
                    {tu('token_issue_guide_message_2')}
                    {tu('token_issue_guide_message_3')}
                  </p>
                  <hr/>
                  <h5 className="card-title">
                    {tu("confirm_setting")}
                    <i className="fa fa-exclamation-circle" aria-hidden="true" style={{color:'red',marginRight:'10px',marginLeft:'10px'}}></i>
                    <span style={{color:'red',fontSize:'12px'}}>{tu('confirm_issue_info')}</span>
                  </h5>
                  <form>
                    <fieldset>
                      <strong>{tu("basic_info")}</strong>
                      <i className="fab fa-wpforms float-right"/>
                      <table className="table confirm">
                        <tbody>
                        <tr>
                          <td className="text-nowrap" style={{borderTop: '0px'}}>{tu("token_name")}:</td>
                          <td style={{borderTop: '0px'}}>{name}</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">{tu("token_abbr")}:</td>
                          <td>{abbr}</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap borderBottom">{tu("total_supply")}:</td>
                          <td className="borderBottom">{totalSupply}</td>
                        </tr>

                        </tbody>
                      </table>
                    </fieldset>

                    <fieldset>

                      <strong>{tu("exchange_setting")}</strong>
                      <i className="fa fa-exchange-alt float-right"/>

                      <table className="table confirm">
                        <tbody>
                        <tr>
                          <td className="text-nowrap" style={{borderTop: '0px'}}>{tu("token_price")}</td>
                          <td style={{borderTop: '0px'}}> 1 {name || tu("token")} = <FormattedNumber
                              value={exchangeRate}/> TRX
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">{tu("start_date")}</td>
                          <td><FormattedDate value={startTime}/></td>
                        </tr>
                        <tr>
                          <td className="text-nowrap borderBottom">{tu("end_date")}</td>
                          <td className="borderBottom"><FormattedDate value={endTime}/></td>
                        </tr>

                        </tbody>
                      </table>

                    </fieldset>
                    <fieldset>
                      <strong>{tu("frozen_supply")}</strong>
                      <i className="fa fa-snowflake float-right"/>
                      <br/>
                      {showFrozenSupply &&
                      <div className="form-row mt-2" style={{marginBottom: "-10px"}}>
                        <p className="col-md-6">
                          <label>{tu("amount")}</label>
                        </p>
                        <p className="col-md-6">
                          <label>{tu("days_to_freeze")}</label>
                        </p>
                      </div>
                      }
                      {!showFrozenSupply ?
                          <span>{tu('freeze_not_valid')}</span> :
                          <table className="table ">
                            <tbody>
                            {
                              frozenSupply.map((frozen, index) => (
                                  <tr key={index}>
                                    <td className="text-nowrap borderBottom"><FormattedNumber value={frozen.amount}/>
                                    </td>
                                    <td className="borderBottom"><FormattedNumber value={frozen.days}/></td>
                                  </tr>
                              ))
                            }
                            </tbody>
                          </table>
                      }
                    </fieldset>
                    <hr/>


                    <div className="form-group">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" value={checkbox}
                               onChange={(e) => {
                                 this.setState({checkbox: e.target.checked, errors: {confirm: null}})
                               }}/>
                        <label className="form-check-label">
                          {tu("token_spend_confirm")}
                        </label>
                      </div>
                      {ErrorLabel(errors.confirm)}
                    </div>
                    <a className="btn btn-default btn-lg" onClick={() => {
                      nextStep(3)
                    }}>{tu('prev_step')}</a>
                    <a className="btn btn-danger btn-lg ml-5" onClick={() => {
                      this.submit();
                    }}>{tu("issue_token")}</a>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeLanguage: state.app.activeLanguage,
    tokens: state.tokens.tokens,
    account: state.app.account,
    wallet: state.wallet.current,
  };
}

const mapDispatchToProps = {
  loadTokens,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Confirm));
