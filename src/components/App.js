import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		const resp = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID WFNsuN0L28U1d_rkMW7tzowuhC6wiIXJJQhZ-EL_6QY',
			},
		});
		this.setState({ images: resp.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar cbonsubmit={this.onSearchSubmit}></SearchBar>
				<ImageList images={this.state.images}></ImageList>
			</div>
		);
	}
}

export default App;
