import { getProviders, signIn } from "next-auth/react";
import { isObjectLiteralExpression } from "typescript";

function Login({ providers }) {
    return (
        <div>
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="Spotify logo" />

            {Object.values(providers).map((provider) => {
                <div key={provider.name}>
                    <button className="bg-[#18D860] text-white p-5 rounded-lg">
                    Login with {provider.name}
                    </button></div>
            })}
        </div>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
};