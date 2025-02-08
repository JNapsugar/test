import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('Minden bemeneti mező megfelelő címkével jelenjen meg', () => {
    render(<App />);
    expect(screen.getByLabelText(/Név:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kor:/i)).toBeInTheDocument();
    expect(screen.getByText(/Nő/i)).toBeInTheDocument();
    expect(screen.getByText(/Férfi/i)).toBeInTheDocument();
    expect(screen.getByText(/Egyéb/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Foglalkozás:/i)).toBeInTheDocument();
    expect(screen.getByText(/Ágazat:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Jelszó:/i)).toBeInTheDocument();
  });

  test('Hibaüzenet jelenjen meg, ha nem töltötték ki az összes kötelező mezőt', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Regisztráció/i }));
    expect(screen.getByText(/Minden adat kitöltése kötelező!/i)).toBeInTheDocument();
  });

  test('Sikeres űrlap elküldése, ha minden mező helyes', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Név:/i), { target: { value: 'Teszt János' } });
    fireEvent.change(screen.getByLabelText(/Kor:/i), { target: { value: '30' } });
    fireEvent.click(screen.getByLabelText(/Férfi/i));
    fireEvent.change(screen.getByLabelText(/Foglalkozás:/i), { target: { value: 'Informatikus' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'janos@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Jelszó:/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Regisztráció/i }));
    
    expect(screen.queryByText(/Minden adat kitöltése kötelező!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Nem megfelelő jelszó!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Nem megfelelő email!/i)).not.toBeInTheDocument();
  });
});
