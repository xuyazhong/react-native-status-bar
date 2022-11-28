
#import "RNStatusBar.h"
#import "UIDevice+VGAddition.h"

@implementation RNStatusBar

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(statusBarHeight:(RCTResponseSenderBlock)callback) {
  CGFloat height = [UIDevice vg_safedistancetop];
    callback(@[[NSNull null], [NSNumber numberWithFloat:height]]);
}

@end
  
