
import React from 'react'

import {
	Subheader,
	IconButton,
	CircularProgress
} from 'material-ui'

import {
	GridList,
	GridTile
} from 'material-ui/GridList'

import { connect }   from 'react-redux'
import StarBorder    from 'material-ui/svg-icons/toggle/star-border'
import * as actions  from '../redux/actions'


export class TemplatePage extends React.Component {
	static propTypes = {
		templates:       React.PropTypes.array,
		loadTemplates:   React.PropTypes.func.isRequired,
		templatesLoaded: React.PropTypes.bool.isRequired,
	};

	componentDidMount() {
		this.props.loadTemplates()
	}

	render() {
		const { templates, templatesLoaded } = this.props

		return (
			<div className="template-page">

				{ !templatesLoaded && (
					<div>
						<CircularProgress size={2} />
						<Subheader>Loading Templates ...</Subheader>
					</div>
				) }

				{  templatesLoaded &&
					<GridList cellHeight={200}>
						<Subheader>Design Templates</Subheader>

						{templates.map((tile) => (
		        	<GridTile
		          	key={tile.img}
		          	title={tile.title}
		          	subtitle={<span>by <b>{tile.author}</b></span>}
		          	actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
		          <img src={tile.img} />
		        </GridTile>
		      ))}

					</GridList>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		templates:       state.templates,
		templatesLoaded: state.templatesLoaded
	}
}

export default connect(mapStateToProps, actions)(TemplatePage)
