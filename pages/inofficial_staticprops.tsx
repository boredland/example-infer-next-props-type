import type { GetStaticPropsContext, NextPage } from 'next'
import InferNextPropsType from 'infer-next-props-type'

const Page: NextPage<InferNextPropsType<typeof getStaticProps>> = ({ session }) => {
    // session is string
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
