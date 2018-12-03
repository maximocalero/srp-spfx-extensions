import * as React from 'react';
import { AdaptableTopAreaProps } from './AdaptableTopAreaProps';
import { AdaptableTopAreaState } from './AdaptableTopAreaState';
import { StringConstants } from '../common/StringConstants';
import { ComponentsToShow } from '../common/enums';
import GlobalNavigation from 'srp-react-library-js/lib/GlobalNavigation';
import Shortcuts from 'srp-react-library-js/lib/Shortcuts';
import SearchBoxSuggestions from 'srp-react-library-js/lib/SearchBoxSuggestions';
import styles from '../common/AdaptableHeader.module.scss';

export default class AdaptableTopArea extends React.Component<AdaptableTopAreaProps, AdaptableTopAreaState > {
    private _suggestions:string[] = [
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "Angular",
        "Meteor",
        "Ember",
        "Backbone",
        "Aurelia",
        "Polimer",
        "Mithril.js",
        "JQuery",
        "Lodash",
        "Modernizr",
        "Babel",
        "Webpack",
        "D3js",
    ];

    constructor(props: AdaptableTopAreaProps){
        super(props); 

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: ""
          };         
    }

    private async onChange(event) {     
        // let { suggestions } = this.props;
        const inputValue = event.currentTarget.value;
        // if (userInput.length < 3)
        //     return;
        let filteredSuggestions: string[] = [];

        if (inputValue.length > 3){
            const results = await this.props.dataService.getSearchResults(inputValue);
            if (results && results.length > 0){
                results.forEach(result =>{
                    filteredSuggestions.push(result.title);
                })

            }    
        }
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: inputValue
        });
        // this.props.dataService.getSearchResults(userInput).then((results) => {
        //     if (results && results.length > 0){
        //         let filteredSuggestions: string[] = [];
        //         results.forEach(result =>{
        //             filteredSuggestions.push(result.title);
        //         })
        //         this.setState({
        //             activeSuggestion: 0,
        //             filteredSuggestions,
        //             showSuggestions: true,
        //             userInput: e.currentTarget.value
        //         });
        //     }
        // });

        // const filteredSuggestions = this._suggestions.filter(
        //     suggestion =>
        //     suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );
        // this.setState({
        //     activeSuggestion: 0,
        //     filteredSuggestions,
        //     showSuggestions: true,
        //     userInput: e.currentTarget.value
        // });
    }

    protected onClick = e => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
    }

    protected onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    }

    public render(): React.ReactElement<AdaptableTopAreaProps>{
        return(
            <div className = {styles.headerContainer}>
                {this.props.pageHeaderConfig.styleInjection &&
                    <style >
                        {this.props.pageHeaderConfig.stylesToInject}
                    </style>
                }
                {this.props.title !== StringConstants.Empty &&
                    <h1>{this.props.title}</h1>
                }
                {this.props.pageHeaderConfig.componentsToShow.some(componentName => componentName === ComponentsToShow.GlobalNavigation) &&
                    <div className = {styles.globalNavigationContainer}>
                        <GlobalNavigation title="Global Navigation Example" currentUrl ="this.props.currentUrl" globalNavigationItems = {this.props.globalNavigationItems} />
                    </div>
                }
                {this.props.pageHeaderConfig.componentsToShow.some(componentName => componentName === ComponentsToShow.Shortcuts) &&
                    <div className = {styles.shortCutsContainer}>
                        <Shortcuts alignment = "right" shortcutItems = {this.props.shortcutItems } />                
                    </div>
                }

                {this.props.pageHeaderConfig.componentsToShow.some(componentName => componentName === ComponentsToShow.AdaptableSearchBox) &&
                    <div>
                        <SearchBoxSuggestions activeSuggestion = {this.state.activeSuggestion} 
                                            filteredSuggestions = {this.state.filteredSuggestions}
                                            showSuggestions = {this.state.showSuggestions}
                                            userInput = {this.state.userInput}
                                            onChange = {this.onChange.bind(this)}
                                            onClick = {this.onClick.bind(this)}
                                            onKeyDown = {this.onKeyDown.bind(this)}/>                        
                    </div>
                }
            </div>
        );
    }
}