// import worldData from '../assets/data/contribute/formData.json'
// import {useState} from "react";
// import axios from "axios";
import partnerData from "../assets/data/earnPartners.json";

//import HasFormatter from "../components/HasFormatter";

const Contribute = () => {
  // const [selectedWorld, setSelectedWorld] = useState<string>();
  // const [selectedContribution, setSelectedContribution] = useState<string>();
  // const [selectedContributionProp, setSelectedContributionProp] = useState<string>();
  // const [filteredByWorld, setFilteredByWorld] = useState<any>();
  // const [filteredByContribution, setFilteredContribution] = useState<any>();
  // const [email, setEmail] = useState<string>();
  // const [extraInfo, setExtraInfo] = useState<string>();

  // const [worldTab, setWorldTab] = useState<boolean>(true);
  // const [contributeTab, setContributeTab] = useState<boolean>(false);
  // const [infoTab, setInfoTab] = useState<boolean>(false);
  // const [confirmationTab, setConfirmationTab] = useState<boolean>(false);
  //
  // const [error, setError] = useState<string>();
  // const [sendSuccess, setSendSuccess] = useState<boolean>();
  // const [sendFail, setSendFail] = useState<boolean>();

  // const selectWorld = (world) => {
  //   setSelectedWorld(world);
  //   filterBySelectedWorld(world);
  // }

  // const selectContribution = (contribution) => {
  //   setSelectedContribution(contribution);
  //   filterBySelectedContribution(contribution);
  // }

  // const selectContributionProp = (contributionProp) => {
  //   setSelectedContributionProp(contributionProp);
  // }
  //
  // const filterBySelectedWorld = (world) => {
  //   const filteredWorld = worldData.filter(worldData => worldData.world === world);
  //   setFilteredByWorld(filteredWorld);
  // }
  //
  // const filterBySelectedContribution = (contribution) => {
  //   const filteredContribution = filteredByWorld[0].contributionTypes.filter(data => data.name === contribution);
  //   setFilteredContribution(filteredContribution);
  // }

  // const setTabs = (world, contribution, info, confirmation) => {
  //   if (selectedWorld && contribution) {
  //     setWorldTab(world);
  //     setContributeTab(contribution);
  //     setInfoTab(info);
  //     setConfirmationTab(confirmation);
  //     setError('');
  //     if (selectedWorld === 'New World' || selectedWorld === 'Proposal for platform' || selectedWorld === 'Governance') {
  //       setWorldTab(false);
  //       setContributeTab(false);
  //       setInfoTab(true);
  //       setConfirmationTab(false);
  //     }
  //   } else if (selectedWorld && selectedContribution) {
  //     setWorldTab(world);
  //     setContributeTab(contribution);
  //     setInfoTab(info);
  //     setConfirmationTab(confirmation);
  //     setError('');
  //   } else {
  //     setError('Please select a value first');
  //   }
  // }
  //
  // const send = () => {
  //   axios.post('contactform.php', {
  //     world: selectedWorld,
  //     contribution: selectedContribution,
  //     contributionProp: selectedContributionProp,
  //     email: email,
  //     extraInfo: extraInfo
  //   }).then((response) => {
  //     console.log(response);
  //     setTabs(false, false, false, true);
  //     setSendSuccess(true);
  //   }).catch((error) => {
  //     console.log(error)
  //     setTabs(false, false, false, true);
  //     setSendFail(true);
  //   })
  // }

  return (
    // <div className={'content-container'}>
    //     <h1 className={'contributeContainer__title'}>Contribute</h1>
    //     <div className={'contributeContainer'}>
    //         <div className={'contributeContainer__tabs'}>
    //             <div className={`${worldTab ? 'contributeContainer__tabs__tab active' : 'contributeContainer__tabs__tab'} `} onClick={() => setTabs(true, false, false, false)}>
    //                 <p>Select a world</p>
    //             </div>
    //             <div className={`${contributeTab ? 'contributeContainer__tabs__tab__mid active' : 'contributeContainer__tabs__tab__mid'} `} onClick={() => setTabs(false, true, false, false)}>
    //                 <p>Your contribution</p>
    //             </div>
    //             <div className={`${infoTab ? 'contributeContainer__tabs__tab active' : 'contributeContainer__tabs__tab'} `} onClick={() => setTabs(false, false, true, false)}>
    //                 <p>Contribution info</p>
    //             </div>
    //         </div>
    //         <div className={'contributeContainer__content'}>
    //         {worldTab &&
    //             <>
    //                 {error &&
    //                 <p className={'error'}>{error}</p>
    //                 }
    //                 <h2 className={'contributeContainer__content__title'}>Tell us to what world you would like to contribute?</h2>
    //                 <form className={'formContainer'}>
    //                     <fieldset className={'formContainer__fieldset'}>
    //                         {worldData.map((worldData, index) => (
    //                             <div key={index} className={'formContainer__fieldset__inputContainer'}>
    //                                 <input type={'radio'} className={'formContainer__fieldset__inputContainer__radio'} id={worldData.world} name={'worldSelector'} value={worldData.world} onChange={() => selectWorld(worldData.world)} checked={worldData.world === selectedWorld}/>
    //                                 <label htmlFor={worldData.world} className={'formContainer__fieldset__inputContainer__label'}>
    //                                     <img src={worldData.img} alt={'icon'}/>
    //                                     {worldData.world}
    //                                 </label>
    //                             </div>
    //                         ))}
    //                     </fieldset>
    //                 </form>
    //                 <button onClick={() => setTabs(false, true, false, false)} className={`contributeContainer__content__button ${selectedWorld ? 'activeButton' : ''}`}><p>Next</p></button>
    //             </>
    //         }
    //         {contributeTab &&
    //             <>
    //                 {error &&
    //                 <p className={'error'}>{error}</p>
    //                 }
    //                 <h2 className={'contributeContainer__content__title'}>What contribution would you like to make?</h2>
    //                 <form className={'formContainer'}>
    //                     <fieldset className={'formContainer__fieldset'}>
    //                         {filteredByWorld[0]?.contributionTypes.map((contribution, index) => (
    //                             <div key={index} className={'formContainer__fieldset__inputContainer'}>
    //                                 <input type={'radio'} className={'formContainer__fieldset__inputContainer__radio'} id={contribution.name} value={contribution.name} onChange={() => selectContribution(contribution.name)} checked={contribution.name === selectedContribution}/>
    //                                 <label htmlFor={contribution.name} className={'formContainer__fieldset__inputContainer__label'}>
    //                                     <img src={contribution.img} alt={'icon'}/>
    //                                     {contribution.name}
    //                                 </label>
    //                             </div>
    //                         ))}
    //                     </fieldset>
    //                 </form>
    //                 <div className={'contributeContainer__content__buttonContainer'}>
    //                     <button onClick={() => {setContributeTab(false); setWorldTab(true);}} className={`contributeContainer__content__buttonContainer__button activeButton`}><p>Back</p></button>
    //                     <button onClick={() => setTabs(false, false, true, false)} className={`contributeContainer__content__buttonContainer__button ${selectedContribution ? 'activeButton' : ''}`}><p>Next</p></button>
    //                 </div>
    //             </>
    //         }
    //         {infoTab &&
    //             <div>
    //                 <form className={'formContainer'}>
    //                     <h2 className={'formContainer__title'}>Selected World: <span>{selectedWorld}</span></h2>
    //                     <h2 className={'formContainer__title'}>Selected contribution: <span>{selectedContribution}</span></h2>
    //                     <fieldset className={'formContainer__fieldset'}>
    //                         {selectedContribution && filteredByContribution[0].contributionTypeProperties &&
    //                             <h2 className={'formContainer__title'}>select your type of contribution</h2>
    //                         }
    //                         {selectedContribution && filteredByContribution[0].contributionTypeProperties &&
    //                         filteredByContribution[0].contributionTypeProperties.map((typeProperty, index) => (
    //                                     <div key={index} className={'formContainer__fieldset__inputContainer'}>
    //                                         <input type={'radio'} className={'formContainer__fieldset__inputContainer__radio'} id={typeProperty.property} value={typeProperty.property} onChange={() => selectContributionProp(typeProperty.property)}/>
    //                                         <label htmlFor={typeProperty.property} className={'formContainer__fieldset__inputContainer__label'}>
    //                                             <img src={typeProperty.img} alt={'icon'}/>
    //                                             {typeProperty.property}
    //                                         </label>
    //                                     </div>
    //                                 ))
    //                         }
    //                         <h2 className={'formContainer__title'}>Email</h2>
    //                         <input type={'text'} onChange={(e) => setEmail(e.target.value)} className={'formContainer__textInput'} placeholder={'your email'}/>
    //                         <h2 className={'formContainer__title'}>Additional information you would like to share with us?</h2>
    //                         <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} className={'formContainer__textArea'}/>
    //                     </fieldset>
    //                 </form>
    //                 <div className={'contributeContainer__content__buttonContainer'}>
    //                     <button onClick={() => setTabs(false, true, false, false)} className={`contributeContainer__content__buttonContainer__button activeButton`}><p>Back</p></button>
    //                     <button onClick={() => send()} className={`contributeContainer__content__buttonContainer__button activeButton`}><p>Send</p></button>
    //                 </div>
    //             </div>
    //             }
    //             {confirmationTab && sendSuccess &&
    //                 <div className={'confirmationContainer'}>
    //                     <h2>Thank you! We have received your submission.</h2>
    //                 </div>
    //             }
    //             {confirmationTab && sendFail &&
    //                 <div className={'errorContainer'}>
    //                     <h2>That didn't go well lol, Please try again.</h2>
    //                 </div>
    //             }
    //     </div>
    //     </div>
    // </div>
    <>
      <div className={'earn-header'} style={{backgroundImage: 'linear-gradient(to right, rgba(255, 11, 172, 0.5), rgba(47, 18, 220, 0.5)), url(https://i.imgur.com/VpLJxrH.jpg)'}}>
        <div className={'earn-header__text-holder'}>
          <h1 className={'earn-header__text-holder__title'}>Contribute to Koios</h1>
          {/*<p className={'earn-header__text-holder__description'}>{earnData.headerDescription}</p>*/}
        </div>
      </div>

      <div className={'partner'}>
        <div className={'partner__header'}>
          <h1 className={'title'}>Welcome, dear visitor.</h1>
          <p className={'sub-title'}>Thank you for providing a proposal. Sharing is sacred :heart: and we highly appreciate your contribution! Don’t forget to drop your public key and reap the rewards 🚀</p>
          <p>Could be with the same proposal form on the earn page. </p>
        </div>

        <div className={'steps-row'}>
          <ul className={'item-list'}>

          </ul>
        </div>

        <div>
          <form>
            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>1.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>Hi there! Let's start with your first name.</p>
                  <input type="firstName" name="FirstName"/>
                </label>  
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>2.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>And your last name?</p>
                  <input type="lastName" name="LastName"/>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>3.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>What is your public key?</p>
                  <input type="publicKey" name="PublicKey"/>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>4.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>Do you represent an organization or are you acting on an individual basis?</p>
                  <div>
                    <button id="0">
                      <h3>A</h3>
                      <p className={'steps-row__text-holder'}>I represent some form of organization</p>
                    </button>
                    <button id="1">
                      <h3>B</h3>
                      <p>I'm flying solo here</p>
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>5.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>What is is the name of the organization?</p>
                  <input type="publicKey" name="PublicKey"/>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>6.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>What is the link to your website?</p>
                  <input type="publicKey" name="PublicKey"/>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>7.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>What world(s) would you be interested in?</p>
                  <div>
                    <button id="0">
                      <h3>A</h3>
                      <p>Blockchain Technology</p>
                    </button>
                    <button id="1">
                      <h3>B</h3>
                      <p>TDFA: Trading Digital & Financial Assets</p>
                    </button>
                    <button id="2">
                      <h3>C</h3>
                      <p>Datascience & Python</p>
                    </button>
                    <button id="3">
                      <h3>D</h3>
                      <p>Programming DAPPS</p>
                    </button>
                    <button id="4">
                      <h3>E</h3>
                      <p>Other</p>
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>8.</h2>
              <div className={'steps-row__text-holder'}>
              <label>
                  <p>What would you like to propose in a Koios World?</p>
                  <div>
                    <button id="0">
                      <h3>A</h3>
                      <p>Work/learning challenge</p>
                    </button>
                    <button id="1">
                      <h3>B</h3>
                      <p>Social Activity</p>
                    </button>
                    <button id="2">
                      <h3>C</h3>
                      <p>Educational content</p>
                    </button>
                    <button id="3">
                      <h3>D</h3>
                      <p>Koios Improvement Proposal (KIP)</p>
                    </button>
                    <button id="4">
                      <h3>E</h3>
                      <p>Community Vote</p>
                    </button>
                    <button id="5">
                      <h3>F</h3>
                      <p>I would like to discuss the creation of a new world</p>
                    </button>
                    <button id="6">
                      <h3>G</h3>
                      <p>Other</p>
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>9.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>Could you please elaborate?</p>
                  <input type="publicKey" name="PublicKey"/>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>10.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>Would you like to receive a Titan Token Bounty reward?</p>
                  <div>
                    <button id="0">
                      <h3>A</h3>
                      <p>Yes</p>
                    </button>
                    <button id="1">
                      <h3>B</h3>
                      <p>No</p>
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <h2 className={'steps-row__number'}>11.</h2>
              <div className={'steps-row__text-holder'}>
                <label>
                  <p>Would you like people to contact you to discuss details?</p>
                  <div>
                    <button id="0">
                      <h3>A</h3>
                      <p>Yes</p>
                    </button>
                    <button id="1">
                      <h3>B</h3>
                      <p>No</p>
                    </button>
                  </div>
                </label>
              </div>
            </div>

            <div className={'steps-row'}>
              <input type="submit" value="Submit"/>
            </div>
          </form>
          {/* <div className={'steps-row'}>
          //   <h2 className={'steps-row__number'}>1.</h2>
          //   <div className={'steps-row__text-holder'}>
          //     <p>{partnerData.one}</p>
          //     <a href={partnerData.formUrl}>Take me to the form ASAP</a>
          //   </div>
          // </div>

          // <div className={'steps-row'}>
          //   <h2 className={'steps-row__number'}>2.</h2>
          //   <div className={'steps-row__text-holder'}>
          //     <p>{partnerData.two}</p>
          //   </div>
          // </div>

          // <div className={'steps-row'}>
          //   <h2 className={'steps-row__number'}>3.</h2>
          //   <div className={'steps-row__text-holder'}>
          //     <p>{partnerData.three}</p>
          //   </div>
          // </div> */}

        </div>
      </div>
    </>
  )
}

export default Contribute;
