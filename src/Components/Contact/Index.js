import React from "react";
import {
  Conatainer,
  Content_Wrapper,
  Content,
  ContentSection,
  ContentOne,
  ContentColumn,
  HeaderDetails,
  Header,
} from "./Styles";

const Contact = () => {
  return (
    <Conatainer>
      <Content_Wrapper>
        <Content>
          <ContentSection>
            <ContentOne>
              <ContentColumn>
                <Header>
                  <HeaderDetails>
                    <h2 className='contact'>Contact US</h2>
                    <p className='details'>
                      Feel free to connect if you have any queries related to
                      the products or if you want to know more about bulk
                      orders, International orders/shipping rates and
                      collaborations. <br />
                      <p>Monday - Friday (11:00 am to 5:00 pm)</p>
                    </p>
                  </HeaderDetails>
                </Header>
              </ContentColumn>
            </ContentOne>
          </ContentSection>
        </Content>
      </Content_Wrapper>
    </Conatainer>
  );
};

export default Contact;
