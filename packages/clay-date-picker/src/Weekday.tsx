/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent} from 'react';

interface Props {
	weekday: string;
}

const Weekday: FunctionComponent<Props> = ({weekday}) => (
	<div className="date-picker-day date-picker-calendar-item">
		<abbr>{weekday}</abbr>
	</div>
);

export default Weekday;
