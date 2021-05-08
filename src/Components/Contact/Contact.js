import React from "react";
import {
  Conatainer,
  ContainerHeader,
  HeaderSection,
  Content,
  ContentHeader,
  ContentDetails,
} from "./Styles";

const Contact = () => {
  return (
    <Conatainer>
      <ContainerHeader>
        <HeaderSection>
          <h1 className='headerHeading'>CONTACT US</h1>
        </HeaderSection>
        <Content>
          <ContentHeader></ContentHeader>
          <ContentDetails>
            <p className='header'>
              <span className='headerSpan'>
                We are happy to connect with you at LittleTags.
                <br />
              </span>
              <span className='headerSpan'>
                Please feel free to contact us for any query, concern,
                suggestion, or just about anything to do with us.
                <br />
              </span>
            </p>

            <p className='details'>
              <b>
                <br />
                Please get in touch with us through any of the following means:
                <br />
              </b>

              <span>Mail:</span>
              <a
                href='mailto:mailtoamrapaliboutique@gmail.com'
                className='link'
                target='_blank'>
                <span>
                  maillittletagsteamdelta@gmail.com
                  <br />{" "}
                </span>
              </a>
              <span>
                Whatsapp: +91-9023665633
                <br />
              </span>

              <span>
                Call: +91-9023665633 (Timings: 11 a.m. - 9:00 p.m)
                <br />
              </span>

              <span>Instagram:</span>
              <a
                href='https://www.instagram.com/'
                className='link'
                target='_blank'>
                <span>
                  https://www.instagram.com/
                  <br />{" "}
                </span>
              </a>

              <span>Facebook:</span>
              <a
                href='https://www.facebook.com/'
                className='link'
                target='_blank'>
                <span>
                  https://www.facebook.com/
                  <br />{" "}
                </span>
              </a>
            </p>
          </ContentDetails>
        </Content>
      </ContainerHeader>
    </Conatainer>
  );
};

export default Contact;
