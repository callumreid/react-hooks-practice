import './App.css';


import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div className="App">
      <input name='email'
      value={values.email}
      onChange={handleChange}
      ></input>
      <input type='password'
      name='password'
      value={values.password}
      onChange={handleChange}
      ></input>
    </div>
  );
}

export default App;
