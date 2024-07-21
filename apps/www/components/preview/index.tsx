// import { HomeIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Wrapper } from './wrapper';

const Button = dynamic(() =>
  import('ruru-ui/components/button').then((m) => m.Button),
);

export default {
//   card: (
//     <Wrapper>
//       <div className="rounded-lg bg-background">
//         <Card
//           href="#"
//           icon={<HomeIcon />}
//           title="Hello World"
//           description="Learn More about Caching and Revalidation"
//         />
//       </div>
//     </Wrapper>
//   ),
  button: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Button className='w-fit' variant={"secondary"}> Button </Button>
      </div>
    </Wrapper>
  ),
} as Record<string, ReactNode>;
