import * as React from 'react';
import { AdaptableTopAreaProps } from './AdaptableTopAreaProps';
import { AdaptableTopAreaState } from './AdaptableTopAreaState';
import { StringConstants } from '../common/StringConstants';
import { ComponentsToShow } from '../common/enums';
import GlobalNavigation from 'srp-react-library-js/lib/GlobalNavigation';
import Shortcuts from 'srp-react-library-js/lib/Shortcuts';
import styles from '../common/AdaptableHeader.module.scss';

export default class AdaptableTopArea extends React.Component<AdaptableTopAreaProps, AdaptableTopAreaState > {

    constructor(props: AdaptableTopAreaProps){
        super(props);   
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
                {this.props.pageHeaderConfig.componentsToShow.some(componentName=> componentName === ComponentsToShow.GlobalNavigation) &&
                    <div className = {styles.globalNavigationContainer}>
                        <GlobalNavigation title="Global Navigation Example" currentUrl ="this.props.currentUrl" globalNavigationItems = {this.props.globalNavigationItems} />
                    </div>
                }
                {this.props.pageHeaderConfig.componentsToShow.some(componentName=> componentName === ComponentsToShow.Shortcuts) &&
                    <div className = {styles.shortCutsContainer}>
                        <Shortcuts alignment = "right" shortcutItems = {this.props.shortcutItems } />                
                    </div>

                }
            </div>
        );
    }
}