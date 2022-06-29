import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ session }) => {
    // session is any
    return (
        <div>{session}</div>
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
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
