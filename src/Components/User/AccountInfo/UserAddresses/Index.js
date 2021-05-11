import React from "react";
import {
  MainWrapper,
  Container,
  PageHeader,
  HeaderDetails,
  HeaderButton,
  AddressDetails,
  UserAddress,
  Segment,
  SegmentContent,
} from "./Styles";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStateValue } from "../../../../DataContext/StateProvider";

const Address = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <MainWrapper>
      <Container>
        <PageHeader>
          <Link className='link' to='/account'>
            <ArrowBackIosIcon fontSize='small' />
            Back to Account
          </Link>
          <HeaderDetails>
            <h1 className='headerDetails__heading'>My addresses</h1>
            <HeaderButton>Add a new address</HeaderButton>
          </HeaderDetails>
        </PageHeader>

        <AddressDetails>
          <UserAddress>
            <Segment>
              <h2 className='segmentTitle'>Default Address</h2>
              <SegmentContent>
                <p className='accountAddress'>
                  <span className='one'>{user?.displayName}</span>
                  <br />
                  {user?.addressLineOne}
                  <br />
                  {user?.addressLineTwo}
                  <br />
                  {user?.city}
                  <br />
                  {user?.state}
                </p>
              </SegmentContent>
            </Segment>
          </UserAddress>
        </AddressDetails>
      </Container>
    </MainWrapper>
  );
};

export default Address;
