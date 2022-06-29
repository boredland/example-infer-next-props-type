import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ session }) => {
    // session is any
    return (
        <div>{session}</div>
    )
}

export default Page

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const session: string | undefined = ''
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        }
    }
    return {
        props: {
            session
        },
    }
}
