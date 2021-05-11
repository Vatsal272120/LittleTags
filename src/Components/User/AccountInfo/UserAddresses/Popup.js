import React from "react";
import {
  PopUpContainer,
  PopUpHeader,
  PopUpContent,
  Form,
  FormItem,
  ItemLabel,
  FormButton,
} from "./PopupStyles";
import CloseIcon from "@material-ui/icons/Close";
import { HeaderButton } from "./Styles";
import "../../../../App.css";

const Popup = ({ toggle }) => {
  const registerAddress = (e) => {
    console.log(e);
    toggle();
  };
  return (
    <PopUpContainer>
      <CloseIcon onClick={toggle} />
      <PopUpHeader>
        <h3 className='headerHeading'>Add a new address</h3>
        <p className='headerDescription'>
          Please fill in the information below :
        </p>
      </PopUpHeader>

      <PopUpContent>
        <Form>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='First name'
              autofocus
              required
            />
            <ItemLabel>First name</ItemLabel>
          </FormItem>{" "}
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Last name'
              required
            />
            <ItemLabel>Last name</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Phone'
              required
            />
            <ItemLabel>Phone</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Address 1'
              required
            />
            <ItemLabel>Address 1</ItemLabel>
          </FormItem>
          <FormItem>
            <input type='text' className='formInput' placeholder='Address 2' />
            <ItemLabel>Address 2</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='City'
              required
            />
            <ItemLabel>City</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Zip'
              required
            />
            <ItemLabel>Zip</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='State'
              required
            />
            <ItemLabel>State</ItemLabel>
          </FormItem>
        </Form>
        <FormButton type='submit' onClick={registerAddress}>
          Add a new address
        </FormButton>
      </PopUpContent>
    </PopUpContainer>
  );
};

export default Popup;
