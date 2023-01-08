import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { memo } from 'react';

import styles from './ReactCropper.module.scss';

const cx = classNames.bind(styles);

function ReactCropper({ url, ActionItem }) {
    const [cropper, setCropper] = useState();
    const cropperRef = useRef(null);

    return (
        <div className={cx('wrapper')}>
            <Cropper
                style={{ height: '100%', width: '100%' }}
                movable={false}
                zoomable={false}
                autoCropArea={1}
                initialAspectRatio={1}
                src={url}
                ref={cropperRef}
                viewMode={1}
                guides={true}
                background={false}
                responsive={true}
                checkOrientation={false}
                minContainerWidth={300}
                minContainerHeight={300}
                onInitialized={(instance) => {
                    setCropper(instance);
                }}
            />
            <ActionItem dataCrop={cropper} />
        </div>
    );
}

export default memo(ReactCropper);
