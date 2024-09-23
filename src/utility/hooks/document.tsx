/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useEffect, useState } from "react";

export const useDocument = () => {
	const [myDocument, setMyDocument] = useState<Document | null>(null);

	useEffect(() => {
		setMyDocument(document);
	}, []);

	return myDocument;
};
