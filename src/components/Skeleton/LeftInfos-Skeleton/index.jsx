import styled, { keyframes } from "styled-components";

const SkeletonLoading = () => {
  return (
      <SkeletonContainer>
          <SkeletonTitle>
              <SkeletonIcon />
              <SkeletonText />
          </SkeletonTitle>
          <SkeletonInputContainer>
              <SkeletonInput />
          </SkeletonInputContainer>
          <SkeletonSwitchsDiv>
              <SkeletonText />
              <SkeletonSwitch />
              <SkeletonSwitch />
          </SkeletonSwitchsDiv>
          <SkeletonFooter>
              <SkeletonText />
          </SkeletonFooter>
      </SkeletonContainer>
  );
};

export default SkeletonLoading;

// Animação do background
const shimmer = keyframes`
  0% { background-color: #e0e0e0; }
  50% { background-color: #f0f0f0; }
  100% { background-color: #e0e0e0; }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 100%;
  justify-content: center;
`;

const SkeletonTitle = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  width: 600px;
  height: 120px;
  justify-content: center;
  position: fixed;
  top: 40px;
`;

const SkeletonIcon = styled.div`
  width: 100px;
  height: 90px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-right: 15px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonText = styled.div`
  width: 300px;
  height: 90px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonInputContainer = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: center;
`;

const SkeletonInput = styled.div`
  width: 500px;
  height: 155px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-right: 10px;
  margin-top: 30px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonSwitchsDiv = styled.div`
  width: 600px;
  gap: 20px;
  bottom: 200px;
  position: fixed;
  padding-top: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkeletonSwitch = styled.div`
  width: 100px;
  height: 25px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonFooter = styled.div`
  height: 100px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 40px;
  position: fixed;
`;

