
require('./less/app.less')

import React        from 'react'
import { connect }  from 'react-redux'
import getMuiTheme  from 'material-ui/styles/getMuiTheme'
import baseTheme    from 'material-ui/styles/baseThemes/lightBaseTheme'

import {
	RaisedButton,
	FlatButton,
	Paper
} from 'material-ui'

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import * as actions from '../redux/actions'

class App extends React.Component {
	static propTypes = {
		activePage: React.PropTypes.number.isRequired,
		canGoNext:  React.PropTypes.bool.isRequired
	};

	static childContextTypes = {
		muiTheme:   React.PropTypes.object.isRequired
	};

	constructor(props) {
		super(props)

		this.handlePrev = this.handlePrev.bind(this)
		this.handleNext = this.handleNext.bind(this)
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) }
  }

	handlePrev() {
		this.props.activePage > 0
			&& this.props.setActivePage(this.props.activePage - 1)
	}

	handleNext() {
		this.props.activePage < 2
			&& this.props.setActivePage(this.props.activePage + 1)
	}

	render() {
		const { activePage, canGoNext } = this.props

		return (
			<div className="main-div">

				<Paper className="paper" zDepth={2}>
					<div className="stepper-div">
						<Stepper activeStep={activePage}>
							<Step>
								<StepLabel>Pick a template</StepLabel>
						  </Step>
							<Step>
            		<StepLabel>Customize</StepLabel>
          		</Step>
							<Step>
            		<StepLabel>Publish</StepLabel>
          		</Step>
						</Stepper>
					</div>

					<div className="content-div">
						{ this.props.children }
					</div>

					<div className="action-div">
						<FlatButton
							className="action-btn"
							label="Back"
							disabled={activePage === 0}
							onTouchTap={this.handlePrev}
            />
						<RaisedButton
							className="action-btn"
							label={activePage === 2 ? 'Publish' : 'Next'}
							primary={true}
							disabled={!canGoNext}
							onTouchTap={this.handleNext}
            />
					</div>
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		activePage: state.activePage,
		canGoNext:  state.canGoNext
	}
}

export default connect(mapStateToProps, actions)(App)
