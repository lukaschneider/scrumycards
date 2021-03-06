import Head from "next/head";

import {
  InfoPane,
  TitleView,
  SubtitleView,
  ParagraphView,
  UnorderedListView,
} from "../components/Views";
import {
  ContentContainer,
  TextContainer,
  formWidth,
  spacingL,
} from "../components/Layouts";

const privacy = () => {
  return (
    <>
      <Head>
        <title>Scrumy Cards | Privacy</title>
      </Head>
      <InfoPane>
        <ContentContainer>
          <div style={{ width: `min(${formWidth * 2}px, 100%)` }}>
            <div style={{ margin: spacingL }}>
              <TitleView>Privacy</TitleView>
            </div>
            <TextContainer>
              <ParagraphView>
                This page is used to inform our visitors regarding our policies
                with the collection, use, and disclosure of Personal Information
                if anyone decided to use our Service, the Scrumy Cards website.
              </ParagraphView>

              <ParagraphView>
                If you choose to use our Service, then you agree to the
                collection and use of information in relation with this policy.
                The Personal Information that we collect are used for providing
                and improving the Service. We will not use or share your
                information with anyone except as described in this Privacy
                Policy.
              </ParagraphView>

              <ParagraphView>
                Our Privacy Policy was created with the help of the{" "}
                <a href="https://www.privacypolicytemplate.net">
                  Privacy Policy Template
                </a>{" "}
                and the{" "}
                <a href="https://www.disclaimergenerator.org/">
                  Disclaimer Generator
                </a>
                .
              </ParagraphView>

              <SubtitleView>Log Data</SubtitleView>

              <ParagraphView>
                We want to inform you that whenever you visit our Service, we
                collect information that your browser sends to us that is called
                Log Data. This Log Data may include information such as your
                computer’s Internet Protocol ("IP") address, browser version,
                pages of our Service that you visit, the time and date of your
                visit, the time spent on those pages, and other statistics.
              </ParagraphView>

              <SubtitleView>Cookies</SubtitleView>

              <ParagraphView>
                Cookies are files with small amount of data that is commonly
                used an anonymous unique identifier. These are sent to your
                browser from the website that you visit and are stored on your
                computer’s hard drive.
              </ParagraphView>

              <ParagraphView>
                Our website uses these "cookies" to collection information and
                to improve our Service. If you choose to disable cookies on our
                website, you may not be able to use some portions of our
                Service.
              </ParagraphView>

              <ParagraphView>
                For more general information on cookies, please read{" "}
                <a href="https://www.cookieconsent.com/what-are-cookies/">
                  "What Are Cookies"
                </a>
                .
              </ParagraphView>

              <SubtitleView>Service Providers</SubtitleView>

              <ParagraphView>
                We may employ third-party companies and individuals due to the
                following reasons:
              </ParagraphView>

              <UnorderedListView>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </UnorderedListView>

              <ParagraphView>
                We want to inform our Service users that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </ParagraphView>

              <SubtitleView>Security</SubtitleView>

              <ParagraphView>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </ParagraphView>

              <SubtitleView>Links to Other Sites</SubtitleView>

              <ParagraphView>
                Our Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over, and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </ParagraphView>

              <SubtitleView>Children's Privacy</SubtitleView>

              <ParagraphView>
                Our Services do not address anyone under the age of 13. We do
                not knowingly collect personal identifiable information from
                children under 13. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so that we will be able to do
                necessary actions.
              </ParagraphView>

              <SubtitleView>Changes to This Privacy Policy</SubtitleView>

              <ParagraphView>
                We may update our Privacy Policy from time to time. Thus, we
                advise you to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately, after
                they are posted on this page.
              </ParagraphView>

              <SubtitleView>Contact Us</SubtitleView>

              <ParagraphView>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us at{" "}
                <a href="mailto:scrumycards@icloud.com">
                  scrumycards@icloud.com
                </a>
                .
              </ParagraphView>
            </TextContainer>
          </div>
        </ContentContainer>
      </InfoPane>
    </>
  );
};

export default privacy;
