import Page from '@/ui/page';
import H1 from '@/ui/headings/h1';
import {dbConnect} from '@/middleware/db';

export function getServerSideProps(context) {
  dbConnect();
  
  return {
    props: {
      fighters: [
        {
          firstName: 'Conor',
          lastName: 'McGregor',
        },
      ],
    },
  };
}

export default function LandingPage({fighters}) {
  return(
    <div>
      <Page title='Welcome to my NexJS app!'
      description="This is my awesome page about nextjs and serve as the landing page for my app">
      <H1>Hello everybody</H1>
      <p>Here are some MMA fighters</p>
      {
        fighters.map((fighter) => {
          return(
            <li>
              {fighter.firstName} {fighter.lastName}
            </li>
          );
        })
      }
      </Page>
    </div>
    )
}
