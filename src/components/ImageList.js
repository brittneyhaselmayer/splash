import React from 'react';

const ImageList = (props) => {
	const pictures = props.images.map((image) => {
		return (
			<img src={image.urls.regular} alt={image.description} key={image.id} />
		);
	});
	return <div>{pictures}</div>;
};

export default ImageList;
