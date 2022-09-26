import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon, PanelBody, PanelRow, ColorPicker} from "@wordpress/components"
import {InspectorControls, BlockControls, AlignmentToolbar} from "@wordpress/block-editor"
import {ChromePicker} from "react-color"
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { originalMedia as media } from 'css-in-js-media';


export default function Edit(props) {
	const {
		attributes: {
			background,
			titleColor,
			content,
			title,
			bgColor,
		},
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeContent = (event) => {
		setAttributes({ content: event.target.value });
	};
	const onChangeTitle = (event) => {
		setAttributes({ title: event.target.value });
	};

	// const setImage = (event) => {
	// 	console.log("image", event.currentTarget.files)
	// 	// setAttributes({ image: event.currentTarget.files });
	// };

    const [currentTab, setCurrentTab] = useState(TABS[0]);

    const imagesMarkup = TABS.map((singleTab, idx) => {
      const isActive = singleTab.title === currentTab.title;
      const isFirst = idx === 0;
    
      return (
        <ImageContainer key={singleTab.title} isActive={isActive}>
          <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} />
        </ImageContainer>
      );
    });
    
    const tabsMarkup = TABS.map((singleTab, idx) => {
      const isActive = singleTab.title === currentTab.title;
    
      return (
        <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
          <TabTitleContainer>
            <CircleContainer>
              <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
            </CircleContainer>
            <h4>{singleTab.title}</h4>
          </TabTitleContainer>
          <Collapse isOpen={isActive} duration={300}>
            <TabContent>
              <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
            </TabContent>
          </Collapse>
        </Tab>
      );
    });
    
    function handleTabClick(idx) {
      setCurrentTab(TABS[idx]);
    }


	return (
		<div {...blockProps}>
			<InspectorControls>
				<div id="gutenpride-controls">
				<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<PanelBody
							tittle="Front: background, color, title"
							initialOpen={true}
						>

							Kolor tła{" "}
							<ChromePicker
								color={background}
								onChangeComplete={(x) =>
									props.setAttributes({ background: x.hex })
								}
								disableAlpha={false}
							/>
													</PanelBody>

			</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<PanelBody
							tittle="Front: background, color, title"
							initialOpen={true}
						>

							Kolor tytułu{" "}
							<ChromePicker
								color={titleColor}
								onChangeComplete={(x) =>
									props.setAttributes({ titleColor: x.hex })
								}
								disableAlpha={false}
							/>
							tytuł <input onChange={onChangeTitle} value={title} />
						</PanelBody>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Card Content: Color i content", "gutenpride")}
						</legend>
						<PanelBody tittle="Background Color" initialOpen={true}>

							Kolor opisu{" "}
							<ChromePicker
								color={bgColor}
								onChangeComplete={(x) =>
									props.setAttributes({ bgColor: x.hex })
								}
								disableAlpha={true}
							/>
							Opis <input onChange={onChangeContent} value={content} />
						</PanelBody>
					</fieldset>
				</div>
			</InspectorControls>

         


  <FeaturesGalleryWrapper>
    <GalleryWrapper>
      <TabsContainer>{tabsMarkup}</TabsContainer>
      {imagesMarkup}
    </GalleryWrapper>
  </FeaturesGalleryWrapper>
</div>
)}

const FeaturesGalleryWrapper = styled(Container)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

const GalleryWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 4rem;

${media('<=desktop')} {
  flex-direction: column;
}
`;

const Content = styled.div`
& > *:not(:first-child) {
  margin-top: 1rem;
}
text-align: center;
`;

const TabsContainer = styled.div`
flex: 1;
margin-right: 4rem;

& > *:not(:first-child) {
  margin-top: 2rem;
}

${media('<=desktop')} {
  margin-right: 0;
  margin-bottom: 4rem;
  width: 100%;
}
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
position: relative;
overflow: hidden;
border-radius: 0.8rem;
flex: ${(p) => (p.isActive ? '2' : '0')};
box-shadow: var(--shadow-md);

&:before {
  display: block;
  content: '';
  width: 100%;
  padding-top: calc((9 / 16) * 100%);
}

& > div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

${media('<=desktop')} {
  width: ${(p) => (p.isActive ? '100%' : '0')};
}
`;

const Tab = styled.div<{ isActive: boolean }>`
display: flex;
flex-direction: column;
padding: 2rem 1.5rem;
background: rgb(var(--cardBackground));
box-shadow: var(--shadow-md);
opacity: ${(p) => (p.isActive ? 1 : 0.6)};
cursor: pointer;
border-radius: 0.6rem;
transition: opacity 0.2s;

font-size: 1.6rem;
font-weight: bold;

${media('<=desktop')} {
  width: 100%;
}
`;

const TabTitleContainer = styled.div`
display: flex;
align-items: center;

h4 {
  flex: 1;
}
`;

const TabContent = styled.div`
display: flex;
flex-direction: column;
font-weight: normal;
margin-top: 0.5rem;
font-size: 1.5rem;
padding-left: calc(5rem + 1.5rem);

${media('<=tablet')} {
  padding-left: calc(4rem + 1.25rem);
}

p {
  font-weight: normal;
}
`;

const CircleContainer = styled.div`
flex: 0 calc(5rem + 1.5rem);

${media('<=tablet')} {
  flex: 0 calc(4rem + 1.25rem);
}`


const TABS = [
    {
      title: 'Find relevant media contacts - multiline title',
      description:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.</p>',
      imageUrl: 'https://pl.freepik.com/darmowe-zdjecie/narzedzia-sportowe_18415697.htm#&position=12&from_view=popular',
      baseColor: '249,82,120',
      secondColor: '221,9,57',
    },
    {
      title: 'Another amazing feature',
      description:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.</p>',
      imageUrl: 'https://pl.freepik.com/darmowe-zdjecie/teksturowane-tlo-z-litego-betonu_17839221.htm#&position=7&from_view=popular',
      baseColor: '57,148,224',
      secondColor: '99,172,232',
    },
    {
      title: 'And yet... another truly fascinating feature',
      description:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.</p>',
      imageUrl: 'https://pl.freepik.com/darmowe-zdjecie/biale-tlo-tekstury-sciany-malowane_18416494.htm#&position=0&from_view=popular',
      baseColor: '88,193,132',
      secondColor: '124,207,158',
    },
  ];
  