import MD from '../mdx/example.md'
import MDX from '../mdx/example.mdx'

const Page = () => (
    <div style={{
      maxWidht: "80ch",
      margin: "auto",
      padding: "2rem",
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      justifyContent: "center",
    }}>

      <div>
        <h2>Loaded as .md</h2>
        <MD />
      </div>

      <div>
        <h2>Loaded as .mdx</h2>
        <MDX />
      </div>

    </div>
)

export default Page
