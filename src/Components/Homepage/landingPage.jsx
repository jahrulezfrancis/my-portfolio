import { Box, Heading, Stack, VStack, Text, useMediaQuery, Image, Button, Flex, Spacer } from "@chakra-ui/react";
import NavBar from "../Common/NavBar";
import ProfilePicture from "../Assets/Images/Portcover.jpg"
import styled from "@emotion/styled";

function LandingPage() {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)')
    return (
        <Wrapper>
            <Box color="white">
                <NavBar />
                <Box>
                    <Stack>
                        <Heading fontSize="4xl" textAlign="center">Robustful Website Development for Your Brand</Heading>
                    </Stack>

                    <Spacer boxSize="100px" />
                    <Box id="about" display="flex" flexWrap="wrap" justifyContent={"space-around"}>
                        <Stack spacing={2} align="start" justify="center">
                            <Heading fontSize="25px">have you heard about me? </Heading>
                            <Text style={{ width: "350px" }} color="#A8A8A8">
                                I am a front-end developer with a special focus on building Javascript web systems. I have years of
                                experience building scalable, fast, responsive, and lightweight websites. I am steadfast in completing tasks
                                and projects within designated periods.
                            </Text>
                            <Button mt={10} borderRadius={15} w="200px" p="15px 30px" bgColor={"#FF9142"}>Learn more about me</Button>
                        </Stack>
                        <Image borderRadius="10px" width="350px" src={ProfilePicture} alt="Longsaar Francis" />
                    </Box>

                    <div className="project-highlight">
                        <Heading textAlign="center">My projects highlight</Heading>
                    </div>

                </Box>
            </Box>
        </Wrapper>
    )
}

export default LandingPage;

const Wrapper = styled.section`
    .project-highlight{
        margin-top: 100px;
    }
`