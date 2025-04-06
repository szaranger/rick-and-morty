import type { Preview } from '@storybook/react'

// import { Provider } from "@/components/ui/provider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
  // decorators: [
  //   (Story: React.ComponentType) => (
  //     <Provider>
  //       <Story />
  //     </Provider>
  //   )
  // ],
};

export default preview;