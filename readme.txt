dec 29, 2021

C:\dev\instagram-react-next

instagram clone from Sonny Sangha tutorial:
    Let's build Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, 
        Firebase v9, NextAuth, Recoil)
    https://www.youtube.com/watch?v=a6Xs2Ir40OI


start:
    npm run dev 

deployed:
    https://instagram-react-next.vercel.app

update:
    git add . 
    git commit -m 'message' 
    git push


at deployment:
    - environment variables added at vercel, including:
        NEXTAUTH_URL=https://instagram-react-next.vercel.app
        JWT_SECRET=<string of the developer's choosing>
            note regarding JWT_SECRET: 
                the following was added to [...nextauth].js:
                    secret: process.env.JWT_SECRET,
                    session: {
                        strategy: "jwt",
                    },

    - at Google Cloud Console under APIs & Services/Credentials/OAuth 2.0 Client IDS/Web client
        Authorized Javascript origins:
        add https://instagram-react-next.vercel.app
        Authorized redirect URIs:
        add https://instagram-react-next.vercel.app/api/auth/callback/google
        

