import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Device Pitstop | AI Assistant</Text>
        <Text className="text-zinc-600">
          Tell the AI about the issue. What type of device it is, what proplems or errors you are experiencing, what solutions you would propose, what solutions you have tried, etc..</Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Assistant:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
