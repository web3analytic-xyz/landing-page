import {
  Box,
  Div,
  ResearchSection,
  ResearchSectionWrapper,
  CodeSection,
  CodeBox,
  CodeBoxWrapper,
  TextsWrapper,
  GettingStartedSection,
  GettingStartedSectionWrapper,
} from './styles';
import ResearchImgMobile from '../../assets/images/research-mobile.png';
import {
  PaperDesc, PaperTitle, SectionDesc, SectionTitle, HeaderImg, HeaderSection, HeaderWrapper,
} from '../../helpers/shared-styles';
import SearchIcon from '../../Icons/SearchIcon';
import Button from '../../components/shared/Button/Button';
import GithubIcon from '../../Icons/GithubIcon';

const Research = () => (
  <Div>
    <HeaderSection>
      <HeaderWrapper>
        <SectionTitle>Research from the ground up</SectionTitle>
        <SectionDesc>DeFi is still young and high quality research pushes the frontier forward.
          Please reach out  if you’re interested in collaborating.
        </SectionDesc>
      </HeaderWrapper>
      <HeaderImg src={ResearchImgMobile} />
    </HeaderSection>
    <ResearchSection>
      <SectionTitle>Research</SectionTitle>
      <ResearchSectionWrapper>
        <Box>
          <SearchIcon />
          <PaperTitle>Pareto Theta Vault Whitepaper</PaperTitle>
          <PaperDesc>Uses replicating market makers to achieve permission-less vaults with no cap,
            no oracles, higher yield.
          </PaperDesc>
          <Button>Learn More</Button>
        </Box>
        <Box>
          <SearchIcon />
          <PaperTitle>Constant Power Root Invariants</PaperTitle>
          <PaperDesc>Uses replicating market makers to achieve permission-less vaults with no cap, no oracles, higher yield.
          </PaperDesc>
          <Button>Learn More</Button>
        </Box>
      </ResearchSectionWrapper>
    </ResearchSection>
    <CodeSection>
      <SectionTitle>Code</SectionTitle>
      <CodeBox>
        <CodeBoxWrapper>
          <GithubIcon />
          <TextsWrapper>
            <PaperTitle>pareto-theta-vaults-v1</PaperTitle>
            <PaperDesc>Uses replicating market makers to achieve permission-less vaults with no cap, no oracles, higher yield.
            </PaperDesc>
          </TextsWrapper>
        </CodeBoxWrapper>
        <Button>Visit Github</Button>
      </CodeBox>
    </CodeSection>
    <GettingStartedSection>
      <SectionTitle>Research</SectionTitle>
      <GettingStartedSectionWrapper>
        <Box>
          <PaperTitle>FAQ</PaperTitle>
          <PaperDesc>All your questions answered. Are we missing something? Please tell us in Discord!
          </PaperDesc>
        </Box>
        <Box>
          <PaperTitle>Overview of Theta Vaults</PaperTitle>
          <PaperDesc>A non-technical overview of Theta Vaults.
          </PaperDesc>
        </Box>
        <Box>
          <PaperTitle>Overview of Replicating Market Makers</PaperTitle>
          <PaperDesc>Replicating market makers is a groundbreaking innovation in DeFi
          </PaperDesc>
        </Box>
        <Box>
          <PaperTitle>Overview of Impermanent Loss</PaperTitle>
          <PaperDesc>Impermanent loss can destroy your returns, understand how and when it occurs.
          </PaperDesc>
        </Box>
      </GettingStartedSectionWrapper>
    </GettingStartedSection>
  </Div>
);

export default Research;
