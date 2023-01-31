/** Model for a favorite (a stored TV show) */

export interface FavoriteBookmark {
   /** External id for the TV show at TW maze */
   id: number;
   /** Title for the TV show*/
   title: string;
   /** The url for the image */
   imageUrl: string;
   /** Date when the favorite was created */
   created: Date;
}
