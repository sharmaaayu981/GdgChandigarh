import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import image from '../../images/header/gdgcover.png'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const {
    websiteYaml: { calendar, university },
  } = useStaticQuery(graphql`
    {
      websiteYaml {
        calendar
        university
      }
    }
  `)
  return (
    <header id="hero" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <div className="hero-content">
              <div className="hero-title__group">
                <div className="hero-title">
                  <h2 className="zuri">
                    Google Developers Group <br /> Chandigarh
                  </h2>
                </div>
                <div className="Hero--Subtitle">
                  <p className="lead">
                  Google Developer Group Chandigarh is an initiative to concentrate the 
                  efforts of many developers in and around Punjab to learn, share and get 
                  productive using the various Google products. 
                  <first-letter>G</first-letter>
                    <third-letter>o</third-letter>
                    <second-letter>o</second-letter>
                    <first-letter>g</first-letter>
                    <forth-letter>l</forth-letter>
                    <third-letter>e</third-letter> Developers program for
                    Developers, Managers, Organisations and even Newbies who are 
                    interested in Google's technologies to learn
                    <second-letter> Mobile </second-letter> and{' '}
                    <first-letter>web development skills</first-letter>,{' '}
                    <third-letter>design thinking skills</third-letter> and{' '}
                    <fifth-letter>Actions On google</fifth-letter>,{' '}
                    <forth-letter>Firebase</forth-letter>,{' '}

                    <sixth-letter>Flutter</sixth-letter>

                  </p>
                </div>
              </div>
              {calendar === '' ? null : (
                <a className="hero-button" href={calendar}>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Add to calendar
                </a>
              )}
            </div>
          </Col>
          <Col xs={12} sm={5} className="ml-auto ml-pic">
            <div className="hero-figure">
              <img
                src={image}
                className="img-fluid w-100"
                alt="Illustration of diversity in our developer community"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
