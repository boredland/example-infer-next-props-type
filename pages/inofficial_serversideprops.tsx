import InferNextPropsType from 'infer-next-props-type'
import type { GetServerSidePropsContext, NextPage } from 'next'

const Page: NextPage<InferNextPropsType<typeof getServerSideProps>> = ({ session }) => {
    // session is string
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
