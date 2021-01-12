import React from 'react';

class SearchBar extends React.Component {
	state = {
		inputText: '',
	};

	onFormSubmit(e) {
		e.preventDefault();
		this.props.cbonsubmit(this.state.inputText);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
					<div className="field">
						Image search
						<input
							type="text"
							value={this.state.inputText}
							onChange={(e) => this.setState({ inputText: e.target.value })}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
