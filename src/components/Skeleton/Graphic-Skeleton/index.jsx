import styled, { keyframes } from "styled-components";

const SkeletonGraphic = () => {
    return (
        <SkeletonContainer>
            <SkeletonChart />
        </SkeletonContainer>
    );
};

export default SkeletonGraphic;

const shimmer = keyframes`
  0% { background-color: #e0e0e0; }
  50% { background-color: #f0f0f0; }
  100% { background-color: #e0e0e0; }
`;

const SkeletonContainer = styled.div`
  width: 1300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const SkeletonChart = styled.div`
  width: 90%;
  height: 80%;
  background-color: #e0e0e0;
  border-radius: 10px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;
