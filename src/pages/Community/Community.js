import {
  HeaderImg,
  HeaderSection, HeaderWrapper, PaperDesc, PaperTitle, SectionDesc, SectionTitle,
} from '../../helpers/shared-styles';
import CommunityImg from '../../assets/images/community.png';
import {
  Box,
  BoxWrapper, CommunitySection, CommunitySectionWrapper, Div, ResearchSectionDesc,
} from './styles';
import DiscordIcon from '../../Icons/DiscordIcon';
import Button from '../../components/shared/Button/Button';

const Community = () => (
  <Div>
    <HeaderSection>
      <HeaderWrapper>
        <SectionTitle>The Pareto
          Community
        </SectionTitle>
        <SectionDesc>Pareto wants to build a community pushing the
          frontier of Decentralized Finance forward.
          We welcome everyone from the Crypto-Curious
          to the DeFi Veterans to join us.
        </SectionDesc>
      </HeaderWrapper>
      <HeaderImg src={CommunityImg} />
    </HeaderSection>
    <CommunitySection>
      <SectionTitle textAlign="center">Want to Get Involved?</SectionTitle>
      <ResearchSectionDesc>Find out how to join the Pareto movement below.</ResearchSectionDesc>
      <CommunitySectionWrapper>
        <Box>
          <DiscordIcon />
          <BoxWrapper>
            <PaperTitle>Discord</PaperTitle>
            <PaperDesc>Got questions? Want to get involved? </PaperDesc>
            <Button>Join Discord</Button>
          </BoxWrapper>
        </Box>
        <Box>
          <DiscordIcon />
          <BoxWrapper>
            <PaperTitle>Discord</PaperTitle>
            <PaperDesc>Got questions? Want to get involved? </PaperDesc>
            <Button>Join Discord</Button>
          </BoxWrapper>
        </Box>
        <Box>
          <DiscordIcon />
          <BoxWrapper>
            <PaperTitle>Discord</PaperTitle>
            <PaperDesc>Got questions? Want to get involved? </PaperDesc>
            <Button>Join Discord</Button>
          </BoxWrapper>
        </Box>
        <Box>
          <DiscordIcon />
          <BoxWrapper>
            <PaperTitle>Discord</PaperTitle>
            <PaperDesc>Got questions? Want to get involved? </PaperDesc>
            <Button>Join Discord</Button>
          </BoxWrapper>
        </Box>
      </CommunitySectionWrapper>
    </CommunitySection>
  </Div>
);

export default Community;
