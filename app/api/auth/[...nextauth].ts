// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email"},
//                 password: { label:"Password", type: "password"},
//             },
//             async authorize(credentials) {
//                 const { email, password } = credentials as { email: string; password: string};

//                 const user = await verifyUserCredentials(email, password);
//                 if (user) {
//                     return user;
//                 } else {
//                     return null;
//                 }
//             }
//         })
//     ],
//     pages: {
//         signIn: "/auth/signin",
//         error: "/auth/error",
//     },
//     session: {
//         strategy: "jwt",
//     },
//     callbacks: {
//         async jwt({ token,  user}) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session({ session, token}) {
//             session.user.id = token.id;
//             return session;
//         }
//     }
// };

// export default NextAuth(authOptions);