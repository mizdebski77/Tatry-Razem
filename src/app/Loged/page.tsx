import {  signup } from "./action";

export default function LoginPage() {
    return (
        <form style={{margin:'200px'}}>
            <input  name="email" type="email" required />
            <input id="password" name="password" type="password" required />
            <button formAction={signup}>Log in</button>
        </form>
    )
}