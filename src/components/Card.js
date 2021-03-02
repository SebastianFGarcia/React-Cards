import React from 'react'

import PropTypes from 'prop-types'
import './card.css'


function Card({title,imageSource,text}) {
    return (
        <div className="card text-center bg-dark">   
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top"/>
            </div>
			<div className="card-body text-white">
				<h4 className="card-title">{
                    title ? title:'Mi titulo'
                }</h4>
				<p className="card-text text-secondary">{
                    text ? text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas porro eveniet iure quod incidunt distinctio natus quibusdam delectus. Qui necessitatibus quisquam cumque amet reprehenderit, provident voluptate minima dicta iste iure.'
                }</p>
			</div>
            <a href="#" className="btn btn-outline-secondary border-0">Go to this website</a>
		</div>
    )
}

Card.propTypes={
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    text: PropTypes.string,
}

export default Card