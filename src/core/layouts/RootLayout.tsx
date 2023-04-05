import React from "react";

interface RootLayoutProps {
	children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<>
			<div className="">{children}</div>
		</>
	);
};
