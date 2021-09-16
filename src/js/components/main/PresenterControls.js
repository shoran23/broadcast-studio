import { ResolverFactory } from 'enhanced-resolve'
import React from 'react'

class PresenterModeButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.switcherStatus.input === this.props.input ?
                    <button className='presenter-mode-button-active' onClick={()=> this.props.sendSwitcherCommand(this.props.switcher.setInputSelection(this.props.input))}>{this.props.label}</button>
                :
                    <button className='presenter-mode-button-inactive' onClick={()=> this.props.sendSwitcherCommand(this.props.switcher.setInputSelection(this.props.input))}>{this.props.label}</button>
                }                
            </React.Fragment>
        )
    }
}
class PresenterControls extends React.Component {
    render() {
        return (
            <div id='presenter-controls'>
                {/* <button onClick={()=> this.props.sendSwitcherCommand(this.props.switcher.setInputSelection(1))}>Local Presenter</button> */}
                {/* <button onClick={()=> this.props.sendSwitcherCommand(this.props.switcher.setInputSelection(2))}>Remote Presenter</button> */}
                <PresenterModeButton
                    // states
                    label='Local Presenter'
                    input={1}
                    switcher={this.props.switcher}
                    switcherStatus={this.props.switcherStatus}
                    // methods
                    sendSwitcherCommand={this.props.sendSwitcherCommand}
                />
                <PresenterModeButton
                    // states
                    label='Remote Presenter'
                    input={2}
                    switcher={this.props.switcher}
                    switcherStatus={this.props.switcherStatus}
                    // methods
                    sendSwitcherCommand={this.props.sendSwitcherCommand}
                />
            </div>
        )
    }
}
export default PresenterControls