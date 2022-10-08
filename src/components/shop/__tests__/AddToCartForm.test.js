import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import AddToCartForm from '../AddToCartForm';

describe('AddToCartForm component', () => {
  describe('Quantity input', () => {
    it('Increment button increases quantity by 1', () => {
      render(<AddToCartForm />);
      const incrementButton = screen.getByRole('button', {name: '+'});
      const input = screen.getByRole('spinbutton');

      userEvent.click(incrementButton);
      expect(input).toHaveValue(1);
      userEvent.click(incrementButton);
      expect(input).toHaveValue(2);
    });

    it('Decrement button decreases quantity by 1', () => {
      render(<AddToCartForm />);
      const incrementButton = screen.getByRole('button', {name: '+'});
      const decrementButton = screen.getByRole('button', {name: '-'});
      const input = screen.getByRole('spinbutton');

      userEvent.click(incrementButton);
      expect(input).toHaveValue(1);
      userEvent.click(decrementButton);
      expect(input).toHaveValue(0);
    });

    it('Does not allow you to decrement below zero', () => {
      render(<AddToCartForm />);
      const decrementButton = screen.getByRole('button', {name: '-'});
      const input = screen.getByRole('spinbutton');

      userEvent.click(decrementButton);
      
      expect(input).toHaveValue(0);
    });

    it('Input accepts number and sets quantity', () => {
      render(<AddToCartForm />);
      const input = screen.getByRole('spinbutton');

      userEvent.type(input, '123456789');

      expect(input).toHaveValue(123456789);
    });

    it('Input does not accept anything but numbers', () => {
      render(<AddToCartForm />);
      const input = screen.getByRole('spinbutton');

      userEvent.type(input, '!@#$%^&*().{{}}[[]]-_+=');

      expect(input).toHaveValue(null);
    });
  });

  describe('Form', () => {
    it('Calls handleSubmit if correct arguments are supplied', () => {
      const mockSubmit = jest.fn();
      render(<AddToCartForm handleSubmit={mockSubmit} />);
      const input = screen.getByRole('spinbutton');
      const submitButton = screen.getByRole('button', {name: 'Add to cart'});

      userEvent.type(input, '10');
      userEvent.click(submitButton);

      expect(mockSubmit).toHaveBeenCalledWith(10);
    });

    it('Does not call handleSubmit if correct arguments are not supplied', () => {
      const mockSubmit = jest.fn();
      render(<AddToCartForm handleSubmit={mockSubmit} />);
      const input = screen.getByRole('spinbutton');
      const submitButton = screen.getByRole('button', {name: 'Add to cart'});

      userEvent.type(input, 'NOT VALID');
      userEvent.click(submitButton);

      expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('Resets quantity input to zero on submit', () => {
      const mockSubmit = jest.fn();
      render(<AddToCartForm handleSubmit={mockSubmit} />);
      const input = screen.getByRole('spinbutton');
      const submitButton = screen.getByRole('button', {name: 'Add to cart'});

      userEvent.type(input, '10');
      expect(input).toHaveValue(10);

      userEvent.click(submitButton);
      expect(input).toHaveValue(0);
    });
  });
});