export function UncontrolledForm() {
  return (
    <form>
      <h1>Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
