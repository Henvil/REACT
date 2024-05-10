import classes from './UncontrolledLogin.module.scss';

export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    /*const username = event.target.elements.namedItem('username').value;
    const password = event.target.elements.namedItem('password').value;
    const session = event.target.elements.namedItem('session').checked;*/

    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      session: formData.get('session') === 'on' ? true : false,
    };
    console.log(data);
  }
  /*I vantaggi di usare FormData API sono la rapidità di sintassi, la leggibilità del codice e la flessibilità.
  Ma a tale rapidità e semplicità, diamo in cambio la possibilità di poter manipolare e controllare i dati del nostro form. */
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Uncontrolled Form</h1>
      <input name="username" placeholder="Nome" />
      <input name="password" placeholder="Password" type="password" />
      <input name="session" type="checkbox" />
      <button className={classes.button}>Login</button>
      <button className={classes.button} type="reset">
        Reset
      </button>
    </form>
  );
}
