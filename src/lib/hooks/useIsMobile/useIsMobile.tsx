import useBreakpointValue from "lib/hooks/useBreakpointValue/useBreakpointValue";

const useIsMobile = () => useBreakpointValue({ base: true, sm: false });

export default useIsMobile;
